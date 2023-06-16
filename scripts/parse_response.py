from re import match, sub

raw = ""
while i := input():
    raw += i
    raw += "\n"

items = [
    sub(r" +", " ", " ".join(x).replace("\t", ""))
    for x in (x.strip().split(" ") for x in raw.split("\n") if x.strip())
]

print(items)

regex = r"^(\d*) (.*) (.*)$"
result: list[str] = []

for data in items:
    matches = match(regex, data)

    if not matches:
        print("not matched:", data)
        continue

    name, description = matches.groups()[1:3]

    result.append(f"/** {description} */")
    result.append(f"readonly {name}: str")

print("\n".join(result))
