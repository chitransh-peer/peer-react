# 🚀 Getting Started with Peer Redesign

Welcome! This guide will help you set up and run the Peer Redesign website on your computer. This document is written for everyone, so no technical background is required!

---

## 🛠 Step 1: Install the Requirements

To run this website, you need a small program called **Node.js** installed on your computer.

1.  Go to [nodejs.org](https://nodejs.org/).
2.  Download the version labeled **"LTS"** (Long Term Support).
3.  Open the downloaded file and follow the installation instructions (just keep clicking "Next" or "Continue").

---

## 📂 Step 2: Open the Project Folder

### For Windows Users:
1.  Open your project folder in File Explorer.
2.  Click on the **Address Bar** at the top (where it shows the folder path).
3.  Type `powershell` and press **Enter**. A blue or black window will pop up.

### For Mac Users:
1.  Open your **Applications** folder, then **Utilities**, and open **Terminal**.
2.  Type `cd ` (with a space after it).
3.  Drag your project folder from Finder directly into the Terminal window.
4.  Press **Enter**.

---

## 🚀 Step 3: Run the Website

Once you have the terminal window open from Step 2, type these two commands one by one:

1.  **Install the "Engine" (First time only):**
    Type the following and press **Enter**:
    ```bash
    npm install
    ```
    *Wait for it to finish. You might see some warnings, but as long as it doesn't say "Error," you are good!*

2.  **Start the Website:**
    Type the following and press **Enter**:
    ```bash
    npm run dev
    ```

---

## 🌐 Step 4: View the Site

After running the last command, you will see a message like this:
`➜  Local:   http://localhost:5173/`

1.  **Hold Ctrl (Windows) or Command (Mac)** and click that link.
2.  Or simply open your web browser (Chrome, Safari, Edge) and type `http://localhost:5173/` in the address bar.

**The website is now running!** 🎉

---

## 🛑 How to Stop
To stop running the website, go back to the terminal/powershell window and press **Ctrl + C** on your keyboard. It might ask "Terminate batch job?", just type `y` and press **Enter**.

---

## ❓ Troubleshooting

*   **"Command not found":** This usually means Node.js wasn't installed correctly. Try restarting your computer.
*   **The page is blank:** Make sure you clicked the correct link (usually `localhost:5173`).
*   **I closed the window:** Just follow **Step 2** and **Step 3 (item 2)** again to restart the site.

---

*Made with ❤️ for Peer Consulting Resources.*
