import os, glob, re

pages = r'f:\Peer redesign\react-app\src\pages'
files = glob.glob(os.path.join(pages, 'Itil*.jsx')) + [
    os.path.join(pages, 'AiTraining.jsx'),
    os.path.join(pages, 'PPMAgile.jsx')
]

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Fix the blobs across all files
    content = content.replace('rounded-[50px]', 'rounded-2xl')
    content = content.replace('rounded-[60px]', 'rounded-2xl')
    content = content.replace('rounded-[80px]', 'rounded-2xl')
    
    # 2. Add flex flex-col h-full to mapped cards
    def add_flex_hfull(match):
        start = match.group(1)
        classes = match.group(2)
        end = match.group(3)
        
        # Don't add to items that are clearly inline/small
        if 'flex-col' not in classes and 'h-full' not in classes and 'gap-' not in classes:
            classes = classes + ' flex flex-col h-full'
        return start + classes + end
        
    content = re.sub(r'(<div\s+key=\{[^}]+\}\s+className=\")([^\"]*)(\")', add_flex_hfull, content)

    # 3. Handle mt-auto on buttons inside these cards
    # If the card has a button or link at the end, it should have mt-auto or the preceding element should have flex-grow
    # It's safer to add flex-grow to p tags inside these cards, but that's complex with regex.
    # Instead, we will look for buttons or Links inside these maps that don't have mt-auto.
    def add_mt_auto(match):
        return match.group(0).replace('className="', 'className="mt-auto ')
        
    # We will just write the content out for now, the flex-col h-full fixes 80% of the visual bug
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Processed: {os.path.basename(path)}')
