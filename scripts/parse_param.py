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

regex = r"^(.*) (.*)\((필수|선택)\) (.*)$"
result: list[str] = []


def string_to_type(name: str) -> str:
    if name == "STRING":
        return "string"
    elif name == "INTEGER":
        return "number"
    else:
        raise NotImplementedError("not implemented")


for data in items:
    matches = match(regex, data)

    if not matches:
        print("not matched:", data)
        continue

    name, typeName, required, description = matches.groups()

    result.extend(
        [
            f"/** {description} */",
            f'readonly {name}{"" if required == "필수" else "?"}: {string_to_type(typeName)}',
        ]
    )

print("\n".join(result))
