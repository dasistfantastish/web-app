from rest_framework.views import APIView
from rest_framework.response import Response


class TestApiView(APIView):
    def get(self, request, *args, **kwargs):
        data = [
                {
                    'id' : 1,
                    'name' : 'Dzenik'
                },
                {
                    'id' : 2,
                    'name' : 'Sanya'
                },
                ]
        return Response(data)