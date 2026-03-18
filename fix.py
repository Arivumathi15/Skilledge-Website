with open("client/public/master-python.html", "r") as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if '<div style="margin-top:1.5rem;background:var(--white);border:1px solid var(--border);border-radius:12px;padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">' in line:
        skip = True
    if skip and '    </div>' in line:
        pass
    if not skip:
        new_lines.append(line)
    if skip and 'Total points · Pass mark: 250</div>' in line:
        pass
    if skip and '      </div>' in line and '</div>' in lines[lines.index(line)-1]:
        pass
    
