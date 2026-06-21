$ErrorActionPreference = "Continue"
$out = "D:\photography\public\images"
New-Item -ItemType Directory -Force $out | Out-Null
$ts = "20250323042803"

# name -> original pixieset path (without scheme)
$map = [ordered]@{
  # hero slides (hi-res)
  "hero-1" = "//images-pw.pixieset.com/elementfield/vR7JG8/_PS12224-43858541-2500.jpg"
  "hero-2" = "//images-pw.pixieset.com/elementfield/592445661/ROY05345-708fba36-2500.jpg"
  "hero-3" = "//images-pw.pixieset.com/elementfield/0OXdkk/KZ-02552-ad77f230-2500.JPG"
  "hero-4" = "//images-pw.pixieset.com/elementfield/rJ4G58/J_J04918-ee8146f6-2500.jpg"
  "hero-5" = "//images-pw.pixieset.com/elementfield/35510233/DSC00079-3034e79d.jpg"
  # intro scattered
  "intro-1" = "//images-pw.pixieset.com/elementfield/23903234/0A2A8715-844a4de8.jpg"
  "intro-2" = "//images-pw.pixieset.com/elementfield/21410233/0A2A8212-4bbbcbdd.jpg"
  "intro-3" = "//images-pw.pixieset.com/elementfield/546525301/104A4222-74fabd05.jpg"
  "intro-4" = "//images-pw.pixieset.com/elementfield/98968163/104A9523-ef71db4b.jpg"
  "intro-5" = "//images-pw.pixieset.com/elementfield/68669605/SAU02168-cd920f7a.jpg"
  # featured weddings
  "featured-harshita" = "//images-pw.pixieset.com/page/pQpnpG/HarshitaNickyHighlight-23-b419dadd-2500.JPG"
  "featured-ria"      = "//images-pw.pixieset.com/page/GJlpdy/RiaKashyapHighlight-42-df978513-2500.JPG"
  "featured-jobin"    = "//images-pw.pixieset.com/elementfield/0kWk4w/AJWeddingHighlight-77-8fd8b771-1000.jpg"
  # cta bg
  "cta-bg" = "//images-pw.pixieset.com/elementfield/ddrzEAL/CocktailPartyedited-21-a1d73176-2500.jpg"
  # couple / testimonial slides
  "couple-1"  = "//images-pw.pixieset.com/elementfield/0kWk4w/ArundhatiAjinkyaHighlight-55-bec717d7-1000.jpg"
  "couple-2"  = "//images-pw.pixieset.com/elementfield/0kWk4w/ArundhatiAjinkyaHighlight-39-d39901e3-1000.jpg"
  "couple-3"  = "//images-pw.pixieset.com/elementfield/0kWk4w/ArundhatiAjinkyaHighlight-50-212e8310-1000.jpg"
  "couple-4"  = "//images-pw.pixieset.com/elementfield/0kWk4w/DSC02471-b6c3b2a8-1000.jpg"
  "couple-5"  = "//images-pw.pixieset.com/elementfield/0kWk4w/DSC02276-4474305b-1000.jpg"
  "couple-6"  = "//images-pw.pixieset.com/elementfield/0kWk4w/ROY03402-61a76d0a-1000.jpg"
  "couple-7"  = "//images-pw.pixieset.com/elementfield/0kWk4w/_PS13321-ce5a4dde-1000.jpg"
  "couple-8"  = "//images-pw.pixieset.com/elementfield/0kWk4w/SRWeddingHighlight-16-e7654978-1000.jpg"
  "couple-9"  = "//images-pw.pixieset.com/elementfield/0kWk4w/SRWeddingHighlight-27-46a00f68-1000.jpg"
  "couple-10" = "//images-pw.pixieset.com/elementfield/0kWk4w/KrishDrishtiHighlight-85-e933ce5e-1000.jpg"
  "couple-11" = "//images-pw.pixieset.com/elementfield/0kWk4w/KrishDrishtiHighlight-29-1b844cad-1000.jpg"
  "couple-12" = "//images-pw.pixieset.com/elementfield/0kWk4w/KrishDrishtiHighlight-24-ad8e7149-1000.jpg"
  # gallery strip
  "g1"  = "//images-pw.pixieset.com/elementfield/00353519/0A2A3826-c8073e66.jpg"
  "g2"  = "//images-pw.pixieset.com/elementfield/00353519/0A2A9723-f3a20158.jpg"
  "g3"  = "//images-pw.pixieset.com/elementfield/00353519/0A2A6529-ae056b1c.jpg"
  "g4"  = "//images-pw.pixieset.com/elementfield/00353519/104A2417-26d41655.jpg"
  "g5"  = "//images-pw.pixieset.com/elementfield/00353519/0A2A8715-188c6010.jpg"
  "g6"  = "//images-pw.pixieset.com/elementfield/00353519/0A2A9172d-d3967796.jpg"
  "g7"  = "//images-pw.pixieset.com/elementfield/00353519/0A2A3643-775995de.jpg"
  "g8"  = "//images-pw.pixieset.com/elementfield/00353519/0E0A2367-4d6f777a.jpg"
  "g9"  = "//images-pw.pixieset.com/elementfield/00353519/J_J02117-e0bc20a2.jpg"
  "g10" = "//images-pw.pixieset.com/elementfield/00353519/0A2A4488-1ca41e0e.jpg"
  "g11" = "//images-pw.pixieset.com/elementfield/00353519/SBP01822-161c037f.jpg"
  "g12" = "//images-pw.pixieset.com/elementfield/00353519/J_J05962-6fcaa46e.jpg"
}

$ok = 0; $fail = 0; $failed = @()
foreach ($k in $map.Keys) {
  $orig = "https:" + $map[$k]
  $ext = [System.IO.Path]::GetExtension($map[$k]).ToLower()
  if ($ext -eq ".jpeg") { $ext = ".jpg" }
  $dest = Join-Path $out ($k + $ext)
  if (Test-Path $dest) { $ok++; continue }
  $got = $false
  foreach ($prefix in @("$ts" + "id_", "2025id_", "id_")) {
    $wb = "https://web.archive.org/web/$prefix/$orig"
    try {
      Invoke-WebRequest -Uri $wb -OutFile $dest -UseBasicParsing -TimeoutSec 60 -ErrorAction Stop
      if ((Get-Item $dest).Length -gt 1000) { $got = $true; break }
    } catch { Start-Sleep -Milliseconds 300 }
  }
  if ($got) { $ok++; Write-Output "OK  $k$ext  ($([math]::Round((Get-Item $dest).Length/1kb))kb)" }
  else { $fail++; $failed += $k; if (Test-Path $dest) { Remove-Item $dest -Force }; Write-Output "FAIL $k" }
}
Write-Output ""
Write-Output "DONE ok=$ok fail=$fail"
if ($failed.Count) { Write-Output ("FAILED: " + ($failed -join ", ")) }
