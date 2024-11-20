from django.shortcuts import redirect
from django.utils.cache import patch_cache_control


class RedirectAuthenticatedUserMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated and request.path == '/accounts/login/':
            return redirect('home')
        response = self.get_response(request)
        patch_cache_control(response, no_cache=True, must_revalidate=True, no_store=True)
        return response
