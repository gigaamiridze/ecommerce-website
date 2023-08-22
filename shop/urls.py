from rest_framework_simplejwt.views import TokenObtainPairView
from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('products', views.get_products, name='products'),
    path('products/<str:pk>', views.get_product, name='product'),
    path('auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]
