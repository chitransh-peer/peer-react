import os, glob, re

pages = r'f:\Peer redesign\react-app\src\pages'
files = glob.glob(os.path.join(pages, 'Itil*.jsx')) + [
    os.path.join(pages, 'AiTraining.jsx'),
    os.path.join(pages, 'PPMAgile.jsx')
]

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Inner containers that hold content + button
    content = content.replace('<div className="p-8">', '<div className="p-8 flex flex-col flex-grow">')
    content = content.replace('<Link to={fam.btnLink} className="inline-block', '<Link to={fam.btnLink} className="mt-auto inline-block')
    
    # Paragraphs that should stretch
    content = content.replace('<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">', '<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">')
    content = content.replace('<p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">', '<p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">')

    # Also fix <div className="space-y-2 mb-6"> which is used in Accreditation cards
    content = content.replace('<div className="space-y-2 mb-6">', '<div className="space-y-2 mb-6 flex-grow">')

    # And for those cards with mt-auto, buttons might be wrapped in another div, we can just let flex-grow handle it
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Processed: {os.path.basename(path)}')
