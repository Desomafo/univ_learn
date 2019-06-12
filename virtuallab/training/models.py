from django.db import models

# Create your models here.


class Topic(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=20)


class Practice(models.Model):
    """
    Describes various tests
    """
    name = models.CharField(max_length=30)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Article(models.Model):
    """
    Describes various IT articles (cycles: for, while , do while)
    """
    name = models.CharField(max_length=50)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, null=True)
    description = models.TextField(default="description")
    examples = models.TextField(default="example")

    def __str__(self):
        return self.name
