import os, re, glob

pages = r'f:\Peer redesign\react-app\src\pages'
files = glob.glob(os.path.join(pages, 'Itil*.jsx')) + [
    os.path.join(pages, 'AiTraining.jsx'),
    os.path.join(pages, 'PPMAgile.jsx')
]

# Remove scan line divs (both top and bottom)
scan_top = re.compile(
    r'\s*<div className="absolute left-0 right-0 pointer-events-none" style=\{\{top:"33%",height:"1px",background:"linear-gradient\(to right,transparent,rgba\(167,139,250,0\.25\),transparent\)"\}\} />'
)
scan_bottom = re.compile(
    r'\s*<div className="absolute left-0 right-0 pointer-events-none" style=\{\{bottom:"33%",height:"1px",background:"linear-gradient\(to right,transparent,rgba\(129,140,248,0\.18\),transparent\)"\}\} />'
)

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = scan_top.sub('', content)
    new_content = scan_bottom.sub('', new_content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Fixed:', os.path.basename(path))
    else:
        print('No change:', os.path.basename(path))

print('Done.')
