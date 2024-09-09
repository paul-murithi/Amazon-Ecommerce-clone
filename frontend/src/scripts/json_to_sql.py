import json

with open('products.json', 'r') as file:
    products = json.load(file)

# Generate SQL insert statements
insert_statements = []
for product in products:
    id = product["id"]
    image = product.get("image", None)
    name = product.get("name", None)
    rating_stars = product["rating"]["stars"]
    rating_count = product["rating"]["count"]
    price_cents = product.get("priceCents", None)
    keywords = json.dumps(product.get("keywords", []))
    type_ = product.get("type", None)
    size_chart_link = product.get("sizeChartLink", None)

    #insert statement
    insert_statement = f"""
    INSERT INTO products (id, image, name, rating_stars, rating_count, price_cents, keywords, type, size_chart_link)
    VALUES ('{id}', '{image}', '{name}', {rating_stars}, {rating_count}, {price_cents}, '{keywords}', '{type_}', '{size_chart_link}');
    """
    insert_statements.append(insert_statement)

with open('insert_products.sql', 'w') as f:
    for statement in insert_statements:
        f.write(statement)
