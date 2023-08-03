from django.shortcuts import render
from django.http import JsonResponse
from .products import products

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

    return JsonResponse(routes, safe=False)

def get_products(request):
    return JsonResponse(products, safe=False)

def get_product(request, pk):
    product = None
    for item in products:
        if item['id'] == pk:
            product = item
            break

    return JsonResponse(product, safe=False)
