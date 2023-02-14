import os
import sys
import base64
import subprocess

def encode(decodedStr):
  encodedBytes = base64.b64encode(decodedStr.encode("utf-8"))
  encodedStr = encodedBytes.decode("utf-8")
  return encodedStr

def decode(encodedStr):
  decodedBytes = base64.b64decode(encodedStr.encode("utf-8"))
  decodedStr = decodedBytes.decode("utf-8")
  return decodedStr

#print(encode("abc123!?$*&()'-=@~"))
#print(decode("YWJjMTIzIT8kKiYoKSctPUB+"))





def py_node(module, arguments):
#     print(__file__)

#     print(os.path.abspath( __file__))
#     print(os.path.realpath(__file__))

#     print(os.path.dirname(os.path.abspath(__file__)))
#     print(os.path.dirname(os.path.realpath(__file__)))

  filepath = os.path.dirname(os.path.abspath(__file__))
  filename = "index.js"

  #response = muterun_js("E:/Python/Python37/nodejs/dist/" + filename, module + " " + encode(arguments))
  response = subprocess.run(
    ["node", os.path.join(filepath, "nodejs", "dist", filename), module, encode(arguments)], 
    stdin=subprocess.DEVNULL,    
    stdout=subprocess.PIPE, 
    stderr=subprocess.PIPE,
    text=True
  )

  if response.returncode == 0:
#     print(response.stdout)
#     print(response.stdout.decode())
#     print(response.stdout.decode("utf-8"))
#     print(response.stdout.decode(sys.stdout.encoding))
    encodedOutput = response.stdout
    decodedOutput = decode(encodedOutput)
    return decodedOutput
  else:
#     sys.stderr.write(response.stderr)
#     sys.stderr.write(response.stderr.decode())
    raise Exception(response.stderr)


	


#print(py_node("httpClient", '{ "method": "get", "url": "https://brasilapi.com.br/api/cep/v2/14770000" }'))
#raise Exception("Teste erro")




	
#https://www.base64encoder.io/python/	
#https://www.base64decoder.io/python/
	
#urlsafe_b64encode
#urlsafe_b64decode



'''

print("Encode")
print("------")
		
data = "abc123!?$*&()'-=@~"
encodedBytes = base64.b64encode(data.encode("utf-8"))

encodedStr = str(encodedBytes, "utf-8")
encodedStr2 = encodedBytes.decode("utf-8")

print(data)
print(encodedBytes)
print(encodedStr)
print(encodedStr2)

print("")

print("Decode")
print("------")

decodedBytes = base64.b64decode(encodedStr)

decodedStr = str(decodedBytes, "utf-8")
decodedStr2 = decodedBytes.decode("utf-8")

print(encodedStr)
print(decodedBytes)
print(decodedStr)
print(decodedStr2)

'''
