# Convert Videos To Images

# Author: [B.I.B.D]
# Date: [1 Februari 2024]

import os
import subprocess
import shutil

def convert_videos_to_images():
    fvideos = os.path.join(os.getcwd(), "videos")
    fimages = os.path.join(os.getcwd(), "images")

    os.makedirs(fimages, exist_ok=True)

    for vfile in os.listdir(fvideos):
        if vfile.endswith(".mp4"):
            vpath = os.path.join(fvideos, vfile)
            ipath = os.path.join(fimages, os.path.splitext(vfile)[0])

            subprocess.run(["ffmpeg", "-i", vpath, "-ss", "00:00:10", "-vframes", "1", f"{ipath}.jpg"])

            new_vname = os.path.join(fvideos, os.path.splitext(vfile)[0])
            os.rename(vpath, new_vname)

            if os.path.exists(f"{ipath}.jpg"):
                shutil.move(f"{ipath}.jpg", ipath)

if __name__ == "__main__":
    print("Starting conversion...")
    convert_videos_to_images()
    print("Conversion completed successfully!")
    
    

