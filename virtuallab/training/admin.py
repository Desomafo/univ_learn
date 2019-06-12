from django.contrib import admin
from training.models import Practice, Article, Topic

# Register your models here.


class PracticeAdmin(admin.ModelAdmin):
    list_display = ('name', 'topic')


admin.site.register(Practice, PracticeAdmin)
admin.site.register(Article)
admin.site.register(Topic)
