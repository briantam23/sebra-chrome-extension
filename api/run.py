from sebra import app
import os
port = int(os.environ.get("PORT", 3000))
app.run(host='0.0.0.0', port=port, debug=False, use_reloader=False)
