"""Generate Ritu Bera's resume PDF — premium, on-brand, accurate."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os, textwrap

# Brand palette
RICH_BLACK = HexColor("#100f0d")
CHARCOAL = HexColor("#1c1b19")
IVORY = HexColor("#f7f2e8")
GOLD = HexColor("#c2a36b")
GOLD_DEEP = HexColor("#a07f4a")
MUTTED = HexColor("#5a5346")

def register_fonts():
    fonts = {}
    candidates = {
        "serif": ["/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"],
        "sans": ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"],
    }
    try:
        pdfmetrics.registerFont(TTFont("Serif", candidates["serif"][0]))
        pdfmetrics.registerFont(TTFont("Serif-Bold", candidates["serif"][1]))
        fonts["serif"] = "Serif"; fonts["serif-bold"] = "Serif-Bold"
    except Exception:
        fonts["serif"] = "Times-Roman"; fonts["serif-bold"] = "Times-Bold"
    try:
        pdfmetrics.registerFont(TTFont("Sans", candidates["sans"][0]))
        pdfmetrics.registerFont(TTFont("Sans-Bold", candidates["sans"][1]))
        fonts["sans"] = "Sans"; fonts["sans-bold"] = "Sans-Bold"
    except Exception:
        fonts["sans"] = "Helvetica"; fonts["sans-bold"] = "Helvetica-Bold"
    return fonts

F = register_fonts()
PAGE_W, PAGE_H = A4
M = 20 * mm

def draw_header(c):
    c.setFillColor(RICH_BLACK)
    c.rect(0, PAGE_H - 48*mm, PAGE_W, 48*mm, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(0, PAGE_H - 48*mm - 1.2, PAGE_W, 1.2, fill=1, stroke=0)
    c.setFillColor(IVORY)
    c.setFont(F["serif-bold"], 26)
    c.drawString(M, PAGE_H - 18*mm, "RITU BERA")
    c.setFillColor(GOLD)
    c.setFont(F["sans"], 9.5)
    c.drawString(M, PAGE_H - 24*mm, "MBA STUDENT  ·  MARKETING MAJOR  ·  OPERATIONS MINOR")
    c.setFillColor(HexColor("#bdb3a0"))
    c.setFont(F["serif"], 10.5)
    c.drawString(M, PAGE_H - 32*mm, "Building Brands. Understanding People. Creating Business Impact.")
    c.setFillColor(IVORY)
    c.setFont(F["sans"], 8.5)
    contact_lines = ["ritubera.work23@gmail.com", "linkedin.com/in/ritu-bera-53a47443a", "Lovely Professional University · India"]
    y = PAGE_H - 18*mm
    for line in contact_lines:
        c.drawRightString(PAGE_W - M, y, line); y -= 5*mm

def section_title(c, title, y):
    c.setFillColor(GOLD_DEEP)
    c.setFont(F["sans-bold"], 8.5)
    c.drawString(M, y, title.upper())
    c.setStrokeColor(GOLD); c.setLineWidth(0.6)
    c.line(M, y - 2.2, M + 14*mm, y - 2.2)
    c.setStrokeColor(HexColor("#e0d6c0")); c.setLineWidth(0.4)
    c.line(M + 15*mm, y - 2.0, PAGE_W - M, y - 2.0)
    return y - 9*mm

def body_text(c, text, y, size=9.5, color=CHARCOAL, font=None, leading=4.8*mm, max_w=None):
    font = font or F["sans"]
    c.setFillColor(color); c.setFont(font, size)
    max_w = max_w or (PAGE_W - 2*M)
    words = text.split(); line = ""
    for w in words:
        test = (line + " " + w).strip()
        if c.stringWidth(test, font, size) <= max_w: line = test
        else:
            c.drawString(M, y, line); y -= leading; line = w
    if line:
        c.drawString(M, y, line); y -= leading
    return y

def build():
    out = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "ritu-bera-resume.pdf"))
    c = canvas.Canvas(out, pagesize=A4)
    c.setTitle("Ritu Bera — Resume"); c.setAuthor("Ritu Bera")
    c.setSubject("MBA Marketing & Brand Strategy Portfolio — Resume")
    draw_header(c)
    y = PAGE_H - 58*mm

    y = section_title(c, "Professional Summary", y)
    y = body_text(c,
        "MBA student at Lovely Professional University specializing in Marketing with a minor in "
        "Operations. Passionate about understanding consumer behaviour, building meaningful brands "
        "and translating strategic marketing into measurable business impact. Combining academic "
        "rigor with hands-on entrepreneurial execution. Seeking opportunities in marketing, brand "
        "management and business development.", y, leading=5*mm)
    y -= 3*mm

    y = section_title(c, "Core Competencies", y)
    skills = [("Marketing Strategy","Brand Management","Consumer Behaviour"),
              ("Business Development","Strategic Thinking","Customer Engagement"),
              ("Communication","Presentation","Teamwork")]
    for row in skills:
        c.setFont(F["sans"], 9.5); x = M
        for s in row:
            c.setFillColor(GOLD_DEEP); c.drawString(x, y, "•")
            c.setFillColor(CHARCOAL); c.drawString(x + 4*mm, y, s)
            x += (PAGE_W - 2*M) / 3
        y -= 5.2*mm
    y -= 2*mm

    y = section_title(c, "Tools & Applications", y)
    c.setFont(F["sans"], 9.5); c.setFillColor(CHARCOAL)
    c.drawString(M, y, "Microsoft Excel   ·   Microsoft PowerPoint   ·   Canva   ·   Google Analytics")
    y -= 8*mm

    y = section_title(c, "Education", y)
    c.setFont(F["serif-bold"], 11); c.setFillColor(CHARCOAL)
    c.drawString(M, y, "Master of Business Administration (MBA)")
    c.setFont(F["sans"], 9); c.setFillColor(GOLD_DEEP)
    c.drawRightString(PAGE_W - M, y, "2026 – 2028"); y -= 5*mm
    c.setFont(F["sans"], 9.5); c.setFillColor(MUTTED)
    c.drawString(M, y, "Lovely Professional University (LPU)   ·   Major: Marketing   ·   Minor: Operations"); y -= 5*mm
    y = body_text(c, "Focus areas: Marketing Management, Brand Management, Consumer Behaviour, Marketing Strategy, Operations Management, Business Development.", y, size=9, leading=4.6*mm)
    y -= 4*mm
    c.setFont(F["serif-bold"], 11); c.setFillColor(CHARCOAL)
    c.drawString(M, y, "Bachelor of Arts in English"); y -= 5*mm
    c.setFont(F["sans"], 9.5); c.setFillColor(MUTTED)
    c.drawString(M, y, "MPC Autonomous College, Odisha"); y -= 5*mm
    y = body_text(c, "A humanities foundation that strengthens communication, critical reading, storytelling and presentation — the human, narrative side of marketing.", y, size=9, leading=4.6*mm)
    y -= 4*mm

    y = section_title(c, "Featured Project — Entrepreneurship", y)
    c.setFont(F["serif-bold"], 11); c.setFillColor(CHARCOAL)
    c.drawString(M, y, "SILVAT  —  From Unbranded to Branded")
    c.setFont(F["sans"], 8.5); c.setFillColor(GOLD_DEEP)
    c.drawRightString(PAGE_W - M, y, "ACADEMIC ENTREPRENEURSHIP · SAREES"); y -= 5*mm
    c.setFont(F["serif-bold"], 13); c.setFillColor(CHARCOAL)
    c.drawString(M, y, "20 units sold")
    c.drawString(M + 55*mm, y, "Rs. 30,000 revenue")
    c.drawString(M + 115*mm, y, "Rs. 1,500 avg price"); y -= 4*mm
    c.setFont(F["sans"], 7.5); c.setFillColor(MUTTED)
    c.drawString(M, y, "(Revenue figure, not profit)"); y -= 5*mm
    y = body_text(c, "A college entrepreneurship project transforming an unbranded saree product into a branded product with a distinct identity and taking it to market end-to-end. Activities spanned product selection, brand identity development, positioning, marketing & promotion, customer engagement, selling, preference analysis and business execution.", y, size=9, leading=4.8*mm)
    y -= 3*mm
    y = body_text(c, "Key learning: a brand is a promise made consistently; execution — not the idea — is where most of the work lives.", y, size=9, leading=4.8*mm, font=F["serif"])
    y -= 4*mm

    y = section_title(c, "Certifications", y)
    for cert in ["LinkedIn Learning Certificate 1 (verified)", "LinkedIn Learning Certificate 2 (verified)"]:
        c.setFillColor(GOLD_DEEP); c.setFont(F["sans"], 9.5); c.drawString(M, y, "•")
        c.setFillColor(CHARCOAL); c.drawString(M + 4*mm, y, cert); y -= 5*mm
    y -= 2*mm

    y = section_title(c, "Career Interests", y)
    c.setFont(F["sans"], 9.5); c.setFillColor(CHARCOAL)
    c.drawString(M, y, "Target roles: Marketing Executive  ·  Brand Executive  ·  Business Development Executive"); y -= 5*mm
    c.drawString(M, y, "Industries: Fashion & Lifestyle, FMCG, Retail & E-commerce,"); y -= 4.6*mm
    c.drawString(M, y, "Digital Marketing & Advertising, Brand Management, Consumer-focused businesses."); y -= 6*mm

    y = section_title(c, "Professional Values", y)
    values = "Continuous learning  ·  Creativity  ·  Communication  ·  Strategic thinking  ·  Adaptability  ·  Team collaboration  ·  Customer-focused thinking  ·  Entrepreneurial mindset"
    c.setFont(F["serif"], 9.5); c.setFillColor(CHARCOAL)
    for line in textwrap.wrap(values, width=70):
        c.drawString(M, y, line); y -= 4.8*mm

    c.setFillColor(GOLD); c.rect(M, 12*mm, PAGE_W - 2*M, 0.5, fill=1, stroke=0)
    c.setFont(F["sans"], 8); c.setFillColor(MUTTED)
    c.drawString(M, 8*mm, "Ritu Bera  ·  ritubera.work23@gmail.com  ·  linkedin.com/in/ritu-bera-53a47443a")
    c.drawRightString(PAGE_W - M, 8*mm, "Resume · 2026")
    c.save()
    print(f"Resume saved: {out}")

build()
