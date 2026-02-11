from django.urls import path
from .views import TaskListCreateView, TaskDetailView, ColumnListCreateView, ProjectListCreateView, ProjectDetailView


urlpatterns = [
    path("projects/", ProjectListCreateView.as_view()),
    path("projects/<int:pk>/", ProjectDetailView.as_view()),
    path("columns/", ColumnListCreateView.as_view(), name="column-list-create"),
    path("tasks/", TaskListCreateView.as_view(), name="task-list-create"),
    path("tasks/<int:pk>/", TaskDetailView.as_view(), name="task-detail"),

]