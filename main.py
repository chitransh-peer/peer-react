from PIL import Image
import numpy as np

def remove_bg_and_crop(input_path, output_path, threshold=240, manual_crop=None):
    img = Image.open(input_path).convert("RGBA")
    
    if manual_crop:
        w, h = img.size
        left, upper, right, lower = manual_crop
        right = min(right, w)
        lower = min(lower, h)
        img = img.crop((left, upper, right, lower))
    
    data = np.array(img)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    white_mask = (r >= threshold) & (g >= threshold) & (b >= threshold)
    data[white_mask, 3] = 0
    result = Image.fromarray(data)

    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
        print(f"  Final size: {result.size}")

    result.save(output_path, "PNG")
    print(f"  Saved: {output_path}\n")

print("Processing header logo...")
remove_bg_and_crop(
    r"f:\Peer redesign\react-app\src\assets\logos\Peer-header.png",
    r"f:\Peer redesign\react-app\src\assets\logos\Peer-header-transparent.png"
)

print("Processing footer logo (removing '7' badge, x<140)...")
remove_bg_and_crop(
    r"f:\Peer redesign\react-app\src\assets\logos\Peer-footer.png",
    r"f:\Peer redesign\react-app\src\assets\logos\Peer-footer-transparent.png",
    manual_crop=(140, 0, 9999, 9999)
)

print("Done!")
