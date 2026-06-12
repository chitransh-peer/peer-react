import os, glob, re

pages = r'f:\Peer redesign\react-app\src\pages'
files = glob.glob(os.path.join(pages, 'Itil*.jsx')) + [
    os.path.join(pages, 'AiTraining.jsx'),
    os.path.join(pages, 'PPMAgile.jsx')
]

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix badges that are absolutely positioned on the top right
    # (absolute right-12 top-12, absolute right-8 top-8, absolute top-12 right-12, etc.)
    # We will replace them with relative positioning on mobile
    content = re.sub(r'className="absolute right-(\d+) top-(\d+)', r'className="relative sm:absolute sm:right-\1 sm:top-\2 flex justify-center mt-4 sm:mt-0', content)
    content = re.sub(r'className="absolute top-(\d+) right-(\d+)', r'className="relative sm:absolute sm:top-\1 sm:right-\2 flex justify-center mt-4 sm:mt-0', content)
    
    # Fix the footer text wrapping
    # Earlier we replaced text-4xl md:text-something with text-3xl sm:text-4xl md:text-something
    # But text-3xl is still 30px, "TRANSFORMATION" is 14 letters, causing it to clip or wrap weirdly
    content = content.replace('text-3xl sm:text-4xl', 'text-[26px] sm:text-4xl')
    content = content.replace('text-3xl md:text-5xl', 'text-[26px] sm:text-4xl md:text-5xl')
    
    # Add word-break logic just in case
    content = content.replace('uppercase leading-none', 'uppercase leading-none break-words')
    content = content.replace('uppercase leading-[0.8]', 'uppercase leading-[0.8] break-words')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f'Processed {os.path.basename(path)}')
