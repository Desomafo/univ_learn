# from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView, ListView, DetailView

from . import models
# Create your views here.


class IntroView(TemplateView):
    template_name = 'training/intro.html'


class TheoryListView(ListView):
    model = models.Article
    template_name = "training/theory_list.html"
    context_object_name = "articles"


class TheoryDetailView(DetailView):
    model = models.Article
    template_name = "training/theory_detail.html"


class PracticeListView(ListView):
    model = models.Practice
    context_object_name = "practices"
    template_name = "training/practice_list.html"


class PracticeDetailView(DetailView):
    model = models.Practice
    context_object_name = "practice"
    template_name = "training/practice_detail.html"


def test(request):
    return HttpResponse("Under constraction")


def flowchart(request):
    return HttpResponse("Under constraction")
