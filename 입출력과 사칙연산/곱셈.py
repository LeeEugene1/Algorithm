# [백준 2588번]
a = int(input())
b = int(input())
#b의 일의자리추출
# print(8%3)뒤에서 나눌만큼 후려치기하고 남은 나머지
one = int(b % 10)
#b의 십의자리추출
ten = int((b % 100)/10)
#b의 백의자리추출
hundread = int(b//100)

print(a*one)
print(a*ten)
print(a*hundread)
print(a*b)