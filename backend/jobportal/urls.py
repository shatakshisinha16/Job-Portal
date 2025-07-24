from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from core.views import JobListView
from django.http import JsonResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

def custom_bad_request(request, exception):
    return JsonResponse({'error': 'Bad Request (malformed JSON or missing fields)'}, status=400)

handler400 = custom_bad_request
