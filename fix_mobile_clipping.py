import os, glob

pages = r'f:\Peer redesign\react-app\src\pages'
files = glob.glob(os.path.join(pages, 'Itil*.jsx')) + [
    os.path.join(pages, 'AiTraining.jsx'),
    os.path.join(pages, 'PPMAgile.jsx')
]

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix overlapping badges in Exam Metrics
    content = content.replace('className="absolute top-0 right-0 p-8"', 'className="relative sm:absolute sm:top-0 sm:right-0 mt-4 sm:mt-0 p-0 sm:p-8 flex justify-center w-full sm:w-auto"')
    content = content.replace('className="absolute top-0 right-0 p-6"', 'className="relative sm:absolute sm:top-0 sm:right-0 mt-4 sm:mt-0 p-0 sm:p-6 flex justify-center w-full sm:w-auto"')
    content = content.replace('className="absolute top-0 right-0 p-12"', 'className="relative sm:absolute sm:top-0 sm:right-0 mt-4 sm:mt-0 p-0 sm:p-12 flex justify-center w-full sm:w-auto"')
    
    content = content.replace('className="absolute top-0 left-0 p-8"', 'className="relative sm:absolute sm:top-0 sm:left-0 mt-4 sm:mt-0 p-0 sm:p-8 flex justify-center w-full sm:w-auto"')
    
    # 2. Fix massive words clipping in Footers / specific sections
    content = content.replace('text-4xl md:text-9xl', 'text-3xl sm:text-4xl md:text-9xl')
    content = content.replace('text-4xl md:text-8xl', 'text-3xl sm:text-4xl md:text-8xl')
    content = content.replace('text-4xl md:text-7xl', 'text-3xl sm:text-4xl md:text-7xl')
    content = content.replace('text-5xl md:text-7xl', 'text-3xl sm:text-4xl md:text-7xl')
    content = content.replace('text-5xl md:text-6xl', 'text-3xl sm:text-4xl md:text-6xl')
    
    # Check for "text-5xl" in footers that might be isolated
    # (Just in case, though they were mostly text-5xl md:text-something)
    
    # 3. Ensure the footer button has rounded-full instead of clipping
    content = content.replace('py-4 px-8 md:py-9 md:px-24 rounded-full', 'py-4 px-6 sm:px-8 md:py-9 md:px-24 rounded-full')
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
