const fs = require('fs');
const path = require('path');

const file = 'D:\\freeieo\\data\\tools.ts';
let content = fs.readFileSync(file, 'utf8');

// Extract the Tool type and tools array
const typeMatch = content.match(/export type Tool[\s\S]*?^};/m);
const toolType = typeMatch ? typeMatch[0] : '';

const toolsMatch = content.match(/export const tools: Tool\[\]\s*=\s*([\s\S]*?)^\];/m);
if (!toolsMatch) {
  console.log('No tools array found');
  process.exit(1);
}

const toolsContent = toolsMatch[1];

// Parse each tool object
const toolObjects = [];
const objectRegex = /\{\s*slug:\s*['"]([^'"]+)['"][\s\S]*?(?=\},\s*\{|\},\s*$)/g;
let match;

while ((match = objectRegex.exec(toolsContent)) !== null) {
  const objStr = match[0];
  const slugMatch = objStr.match(/slug:\s*['"]([^'"]+)['"]/);
  if (!slugMatch) continue;
  
  const slug = slugMatch[1];
  const id = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  
  // Extract all fields
  const extract = (regex) => {
    const m = objStr.match(regex);
    return m ? m[1].trim() : undefined;
  };
  
  const extractArray = (regex) => {
    const m = objStr.match(regex);
    if (!m) return undefined;
    const items = m[1].match(/['"]([^'"]+)['"]/g) || [];
    return items.map(i => i.replace(/['"]/g, ''));
  };
  
  const pricing = extract(/pricing:\s*['"]([^'"]+)['"]/) || 'Freemium';
  const isFree = pricing === 'Free' || pricing === 'Open Source' || pricing === 'Completely Free';
  const isOpenSource = pricing === 'Open Source';
  
  const tool = {
    id,
    slug,
    name: extract(/name:\s*['"]([^'"]*)['"]/) || slug,
    category: extract(/category:\s*['"]([^'"]+)['"]/) || 'other',
    subcategories: extractArray(/subcategories:\s*\[([\s\S]*?)\]/),
    categories: extractArray(/categories:\s*\[([\s\S]*?)\]/),
    description: extract(/description:\s*['"]([\s\S]*?)['"],?\s*\n/) || '',
    url: extract(/url:\s*['"]([^'"]+)['"]/) || '',
    github: extract(/github:\s*['"]([^'"]+)['"]/) || undefined,
    pricing,
    tags: extractArray(/tags:\s*\[([\s\S]*?)\]/) || [],
    featured: extract(/featured:\s*(true|false)/) === 'true',
    trending: extract(/trending:\s*(true|false)/) === 'true',
    popularity: parseInt(extract(/popularity:\s*(\d+)/) || '0'),
    addedAt: extract(/addedAt:\s*['"]([^'"]+)['"]/) || '2024-03-01',
    freeTierNote: extract(/freeTierNote:\s*['"]([\s\S]*?)['"],?\s*\n/) || '',
    openSource: isOpenSource,
    localAI: false,
    selfHosted: isOpenSource,
    freeTier: isFree || pricing === 'Freemium' || pricing === 'Free Tier' || pricing === 'Free Trial',
    noLogin: false,
    verified: true,
    platforms: extractArray(/platforms:\s*\[([\s\S]*?)\]/),
    steps: extractArray(/steps:\s*\[([\s\S]*?)\]/),
    bestFor: extract(/bestFor:\s*['"]([^'"]*)['"]/) || undefined,
  };
  
  toolObjects.push(tool);
}

// Generate new TypeScript output
let output = toolType + '\n\n';
output += 'export const tools: Tool[] = [\n';

for (const tool of toolObjects) {
  output += '  {\n';
  output += `    id: "${tool.id}",\n`;
  output += `    slug: "${tool.slug}",\n`;
  output += `    name: "${tool.name.replace(/"/g, '\\"')}",\n`;
  output += `    category: "${tool.category}",\n`;
  if (tool.subcategories && tool.subcategories.length > 0) {
    output += `    subcategories: [${tool.subcategories.map(c => `"${c}"`).join(', ')}],\n`;
  }
  if (tool.categories && tool.categories.length > 0) {
    output += `    categories: [${tool.categories.map(c => `"${c}"`).join(', ')}],\n`;
  }
  output += `    description: "${tool.description.replace(/"/g, '\\"')}",\n`;
  output += `    url: "${tool.url}",\n`;
  if (tool.github) {
    output += `    github: "${tool.github}",\n`;
  }
  output += `    pricing: "${tool.pricing}",\n`;
  output += `    tags: [${tool.tags.map(t => `"${t}"`).join(', ')}],\n`;
  output += `    featured: ${tool.featured},\n`;
  output += `    trending: ${tool.trending},\n`;
  output += `    popularity: ${tool.popularity},\n`;
  output += `    addedAt: "${tool.addedAt}",\n`;
  output += `    freeTierNote: "${tool.freeTierNote.replace(/"/g, '\\"')}",\n`;
  output += `    openSource: ${tool.openSource},\n`;
  output += `    localAI: ${tool.localAI},\n`;
  output += `    selfHosted: ${tool.selfHosted},\n`;
  output += `    freeTier: ${tool.freeTier},\n`;
  output += `    noLogin: ${tool.noLogin},\n`;
  output += `    verified: ${tool.verified},\n`;
  if (tool.platforms && tool.platforms.length > 0) {
    output += `    platforms: [${tool.platforms.map(p => `"${p}"`).join(', ')}],\n`;
  }
  if (tool.steps && tool.steps.length > 0) {
    output += `    steps: [${tool.steps.map(s => `"${s.replace(/"/g, '\\"')}"`).join(', ')}],\n`;
  }
  if (tool.bestFor) {
    output += `    bestFor: "${tool.bestFor.replace(/"/g, '\\"')}",\n`;
  }
  output += '  },\n';
}

output += '];\n';

fs.writeFileSync(file, output);
console.log('Updated', toolObjects.length, 'tools with new fields');
