from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, 'pages/homepage.html', {})

def shop(request):
    return render(request, 'pages/shop.html', {})

def services(request):
    return HttpResponse("This is services page")

def account(request):
    return render(request,'pages/account.html')

def cart(request):
    return HttpResponse("This is cart page")

def product_individual(request):
    return render(request,'pages/product_individual.html')