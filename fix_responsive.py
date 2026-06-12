import os, glob, re

pages = r'f:\Peer redesign\react-app\src\pages'
files = glob.glob(os.path.join(pages, 'Itil*.jsx')) + [
    os.path.join(pages, 'AiTraining.jsx'),
    os.path.join(pages, 'PPMAgile.jsx')
]

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Padding fixes
    # Replace non-responsive padding classes with responsive variants
    # Only replace if they are not already preceded by a breakpoint or already have responsive variants
    
    # We will use simple text replaces for standard hardcoded strings
    content = content.replace(' p-24 ', ' p-8 md:p-24 ')
    content = content.replace(' p-20 ', ' p-6 md:p-20 ')
    content = content.replace(' p-16 ', ' p-6 md:p-16 ')
    content = content.replace(' p-12 ', ' p-6 md:p-12 ')
    content = content.replace(' px-24 ', ' px-6 md:px-24 ')
    
    # Also handle instances where the class is at the end of the string or before a quote
    content = content.replace(' p-24"', ' p-8 md:p-24"')
    content = content.replace(' p-20"', ' p-6 md:p-20"')
    content = content.replace(' p-16"', ' p-6 md:p-16"')
    content = content.replace(' p-12"', ' p-6 md:p-12"')
    content = content.replace(' px-24"', ' px-6 md:px-24"')

    # 2. Grid fixes
    # "grid-cols-2 lg:grid-cols-4" or "grid-cols-2 md:grid-cols-3" needs to have mobile 1-col fallback
    # The safest way is to change standalone "grid-cols-2" to "grid-cols-1 sm:grid-cols-2"
    # But wait, some might already be "sm:grid-cols-2" or "md:grid-cols-2"
    # Let's replace " grid-cols-2 " with " grid-cols-1 sm:grid-cols-2 "
    
    # Replace the generic grid-cols-2
    # Ensure it's not matching sm:grid-cols-2, md:grid-cols-2, lg:grid-cols-2 etc.
    content = re.sub(r'(?<![:\w])grid-cols-2\b', 'grid-cols-1 sm:grid-cols-2', content)
    # Also fix gap sizes in grids that are massive
    content = re.sub(r'(?<![:\w])gap-16\b', 'gap-6 md:gap-16', content)
    content = re.sub(r'(?<![:\w])gap-12\b', 'gap-6 md:gap-12', content)

    # 3. Footer / Button fixes
    content = content.replace('py-9 px-24 rounded-[40px]', 'py-4 px-8 md:py-9 md:px-24 rounded-full')
    content = content.replace('py-9 px-6 md:px-24 rounded-[40px]', 'py-4 px-8 md:py-9 md:px-24 rounded-full') # In case px-24 was already caught

    # 4. Typography Downscaling
    content = content.replace('text-6xl md:text-9xl', 'text-5xl md:text-9xl')
    
    # 5. Miscellaneous Exam Metrics fixes (as seen in screenshot)
    # The exam metrics titles are text-4xl which breaks on mobile
    content = content.replace('text-4xl', 'text-3xl md:text-4xl')
    # Because replace can affect md:text-4xl:
    content = content.replace('md:text-3xl md:text-4xl', 'md:text-4xl')
    content = content.replace('lg:text-3xl md:text-4xl', 'lg:text-4xl')
    content = content.replace('sm:text-3xl md:text-4xl', 'sm:text-4xl')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Processed: {os.path.basename(path)}')
