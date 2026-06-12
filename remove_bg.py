from PIL import Image
import numpy as np

input_path  = r"f:\Peer redesign\react-app\src\assets\logos\Peer-header-full.png"
output_path = r"f:\Peer redesign\react-app\src\assets\logos\Peer-header-full-transparent.png"

img = Image.open(input_path).convert("RGBA")
data = np.array(img, dtype=np.float32)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Threshold: pixels that are "nearly white" become transparent.
# We also consider pixels that are very light / have low saturation.
threshold = 240
tolerance  = 30   # how far each channel can deviate from white

# A pixel is "white-ish" when all RGB channels are >= threshold
# AND the max deviation between any two channels is small (not a pastel colour).
white_mask = (r >= threshold) & (g >= threshold) & (b >= threshold)

# Smooth the mask edges with an alpha fade based on distance from pure white
# so we don't get a hard cut on anti-aliased edges.
# For each near-white pixel calculate how "white" it is (0-255 → 0 opaque, 255 transparent).
whiteness = np.minimum(np.minimum(r, g), b)   # the darkest channel
# Pixels that are 255 on all channels → fully transparent
# Pixels below threshold → fully opaque
fade = np.clip((whiteness - (threshold - tolerance)) / tolerance, 0, 1)

new_alpha = np.where(white_mask, (1.0 - fade) * 255, a)

out = data.copy()
out[:,:,3] = np.clip(new_alpha, 0, 255)

result = Image.fromarray(out.astype(np.uint8), "RGBA")
result.save(output_path, "PNG")
print(f"Saved transparent logo → {output_path}")
