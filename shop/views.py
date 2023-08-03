from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products

@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/products',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of products'
        },
        {
            'Endpoint': '/products/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single product object'
        },
        {
            'Endpoint': '/products',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new product with data sent in post request'
        },
        {
            'Endpoint': '/products/id',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing product with data sent in post request'
        },
        {
            'Endpoint': '/products/id',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting product'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def get_products(request):
    return Response(products)

@api_view(['GET'])
def get_product(request, pk):
    product = None
    for item in products:
        if item['id'] == pk:
            product = item
            break

    return Response(product)
