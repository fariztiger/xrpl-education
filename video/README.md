# XRPL Lending — Remotion video

60-second original animated explainer (1080 × 1920, 30 fps).

## Preview on Windows

Install [Node.js](https://nodejs.org/) (Node 20+ recommended). In PowerShell:

```powershell
git clone https://github.com/fariztiger/xrpl-education.git
cd xrpl-education\video
npm install
npm run studio
```

Open the local URL Remotion prints and select **XRPLLending**.

## Export MP4

```powershell
npm run render
```

Your file will be created at `video/out/xrpl-lending.mp4`.

## Narration (English voiceover script, draft)

- 00–08: What if lending could work directly on the XRP Ledger? Let's explore the proposed native Lending Protocol.
- 08–18: XLS-66 outlines a draft system for fixed-term, uncollateralized loans using pooled assets.
- 18–30: Depositors provide assets to a Single Asset Vault. Eligible borrowers may receive loans following credit assessment.
- 30–40: Important: underwriting and credit risk management take place off-chain in the proposed architecture.
- 40–51: Loans carry risk, including defaults and liquidity constraints. They are not guaranteed returns.
- 51–60: Learn more in the XRPL Interactive Learning Lab, and check the latest specification and amendment status before relying on technical claims.

Generate narration with a voice provider of your choice, then align it in a video editor or add an audio asset to Remotion in a future iteration. **This prototype exports a silent MP4 with on-screen text**, not synthesized audio.

## Accuracy and disclosures

- This explainer discusses **XLS-66**, a draft standard as checked Nov 10, 2026.
- Do not equate a draft specification with activation of a network amendment.
- Flow diagrams are simplified and hypothetical. No actual network transaction, loan, vault connection or investment yield.
- This is an independent educational project, not endorsed by XRPL Foundation.

References:
- https://xls.xrpl.org/xls/XLS-0066-lending-protocol.html
- https://xrpl.org/resources/known-amendments
- https://www.remotion.dev/docs/render

Note: rendering has not been executed inside GitHub; run the commands on your local machine to validate the MP4.
