from django.db import models

# Create your models here.
class ProjectMember(models.Model):
    name = models.CharField(max_length=50)
    avatar = models.URLField(max_length=500)
    
    def __str__(self):
        return self.name
class Project(models.Model):
    STATUS_CHOICES = [
        ("On Track", "On Track"),
        ("At Risk", "At Risk"),
        ("Delayed", "Delayed"),
        ("Completed", "Completed"),
    ]
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    progress = models.PositiveIntegerField(default=0)
    due_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20,choices=STATUS_CHOICES,default="On Track")
    color = models.CharField(max_length=50,default="bg-blue-500")
    is_favorite = models.BooleanField(default=False)
    team = models.ManyToManyField(ProjectMember,related_name="projects",blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def completed_tasks(self):
        return self.columns.filter(
            tasks__is_completed=True
        ).count()

    def total_tasks(self):
        return self.columns.filter(
            tasks__isnull=False
        ).count()

    def __str__(self):
        return self.name

class Column(models.Model):
    project = models.ForeignKey(Project,related_name="columns",on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    count = models.PositiveIntegerField(default=0)
    color = models.CharField(max_length=50,help_text="Tailwind class (ex: text-blue-500)")
    
    def __str__(self):
        return self.title

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
    column = models.ForeignKey(Column,related_name="tasks",on_delete=models.CASCADE, null=True,blank=True)
    comments = models.PositiveIntegerField(default=0,null=True,blank=True)
    due_date = models.DateField(null=True,blank=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title