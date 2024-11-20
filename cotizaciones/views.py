from django.shortcuts import render
from django.contrib.auth import decorators
import requests
from django.conf import settings

# Create your views here.
@decorators.login_required
def pruebaAPI(request):

    apiUrl = "https://api.monday.com/v2"
    apiKey = settings.API_KEY_MONDAY
    idTablero = settings.ID_TABLERO_MONDAY
    headers = {"Authorization" : apiKey, "API-Version" : "2023-04"}
    mensaje = False

    if request.method == 'POST':
        try:
            form_data = request.POST
            id = form_data.get('id')
            estado = form_data.get('estado')
            proveedor = form_data.get('proveedor')
            oc = form_data.get('oc')
            cotizacion = form_data.get('cotizacion')
            observacion = form_data.get('observacion')

            queryUpdate = '''
            mutation {{
                change_multiple_column_values(
                board_id: {}, 
                item_id: {}, 
                column_values: "{{\\"status\\": \\"{}\\", \\"label9__1\\": \\"{}\\", \\"n_meros_1__1\\": \\"{}\\", \\"texto11__1\\": \\"{}\\", \\"texto1__1\\": \\"{}\\"}}"
                ) {{
                id
                }}
            }}
            '''.format(idTablero, id, estado, proveedor, oc, cotizacion, observacion)
            
            
            dataUpdate = {'query' : queryUpdate}
            update = requests.post(url=apiUrl, json=dataUpdate, headers=headers)
            update.raise_for_status()
            update_response = update.json()
            if 'errors' in update_response:
                raise Exception(update_response['errors'])
            mensaje = {
                'title': 'Datos Guardados',
                'text': 'Datos actualizados con éxito',
                'icon': 'success',
            }
        except Exception as e:
            print("Error: "+e)
            mensaje = {
                'title': 'Error',
                'text': str(e),
                'icon': 'error',
            }

    querySelect = '''
    query GetBoardItems {{   
        boards(ids: {}) {{
           items_page {{
               items {{
                   id 
                    name 
                    column_values {{
                        id 
                        text 
                    }}
                }}
            }}
        }}
    }}
    '''.format(idTablero)

    dataSelect = {'query' : querySelect}

    select = requests.post(url=apiUrl, json=dataSelect, headers=headers)

    data = {
        'data': select.json(),
        'mensaje': mensaje,
    }
    return render(request, 'pruebaApi.html', data)
