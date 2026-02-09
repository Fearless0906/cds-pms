from django.urls import path
from .views import TaskListCreateView, TaskDetailView


urlpatterns = [
    # List all tasks / Create task
    path("tasks/", TaskListCreateView.as_view(), name="task-list-create"),
    # Get / Update / Delete single task
    path("tasks/<int:pk>/", TaskDetailView.as_view(), name="task-detail"),

]