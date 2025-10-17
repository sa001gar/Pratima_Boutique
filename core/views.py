from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'pages/homepage.html', {})

def shop(request):
    return render(request, 'pages/shop.html', {})