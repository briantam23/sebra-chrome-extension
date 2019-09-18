from sebra import app

# seems like our app first runs init on 80 then flask is run on 80
#need to maybe run on different ports?

app.run(host='0.0.0.0', port=82, debug=False, use_reloader=False)
