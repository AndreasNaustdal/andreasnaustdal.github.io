import shutil
import subprocess
import os

final = 'index.html'
temp = 'index2.html'

ignored_lines = [7, 12, 13, 14]

with open(final, 'r') as fin, open(temp, 'w') as fout:
    for lineno, line in enumerate(fin, 1):
        if lineno not in ignored_lines:
            fout.write(line)


subprocess.run('npm run build', shell=True)

distfile = 'dist/index.html'

with open(distfile, 'r') as fin:
    content = fin.read()
    start = content.index('<link'); print(start)
    end = content.index('stylesheet>') + 11; print(end)
    link = content[start:end].replace('=/static','=dist/static'); print(link)
    start = content.index('<script'); print(start)
    end = content.index('</script>') + 9; print(end)
    script1 = content[start:end].replace('=/static','=dist/static'); print(script1)
    start = content.replace('<script','XXXXXXX', 1).find('<script'); print(start)
    end = content.replace('</script>','XXXXXXXXX', 1).find('</script>') + 9; print(end)
    script2 = content[start:end].replace('=/static','=dist/static'); print(script2)
    start = content.replace('<script','XXXXXXX', 2).find('<script'); print(start)
    end = content.replace('</script>','XXXXXXXXX', 2).find('</script>') + 9; print(end)
    script3 = content[start:end].replace('=/static','=dist/static'); print(script3)

with open(temp, 'r') as readfile:
    content = readfile.readlines()

content.insert(6, '    ' + link + '\n');
content.insert(11, '    ' + script1 + '\n');
content.insert(12, '    ' + script2 + '\n');
content.insert(13, '    ' + script3 + '\n');

print('\n'.join(content))

with open(temp, 'w') as writefile:
    content = ''.join(content)
    writefile.write(content)

os.remove(final)
os.rename(temp, final)
