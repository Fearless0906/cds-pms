from django.db import models

# Create your models here.
class Assignee(models.Model):
    name = models.CharField(max_length=150)
    avatar = models.URLField(max_length=500)

    def __str__(self):
        return self.name

class Task(models.Model):
    PRIORITY_CHOICES = [
        ("High", "High"),
        ("Medium", "Medium"),
        ("Low", "Low"),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=100)
    category_color = models.CharField(max_length=50)
    priority = models.CharField(max_length=10,choices=PRIORITY_CHOICES,null=True,blank=True)
    priority_color = models.CharField(max_length=50,null=True,blank=True)
    progress = models.PositiveIntegerField(null=True,blank=True)
    assignees = models.ManyToManyField(Assignee,related_name="tasks",blank=True)
    comments = models.PositiveIntegerField(default=0,null=True,blank=True)
    due_date = models.DateField(null=True,blank=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title