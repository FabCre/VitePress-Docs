# Linux command utils

- grep with 10 lines before and after
```shell
cat myfile | grep 'myResearch' -A 10 -B 10 
```

- sed o print one line (5)
```shell
sed -n 5p file
```
- sed to print multiple lines (5 & 8)
```shell
sed -n -e 5p -e 8p file
```
- sed to print specific range (5 - 8)
```shell
sed -n 5,8p file
```
- sed to print range with other specific line (5 - 8 & 10)
```shell
sed -n -e 5,8p -e 10p file
```