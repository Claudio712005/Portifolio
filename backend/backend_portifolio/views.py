
from django.http import JsonResponse
from .models import Dev

def consultar_devs(request):
    try:
        devs = Dev.objects.all()

        dados = {'Resposta': 'Consulta bem-sucedida!', 'devs': list(devs.values())}

        return JsonResponse(dados)

    except Exception as e:
        print(f'Erro na consulta ao banco de dados: {e}')
        return JsonResponse({'mensagem': 'Erro na consulta ao banco de dados'}, status=500)
