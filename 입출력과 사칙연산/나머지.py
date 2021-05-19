# 5 8 4 -> 
# A,B,C = int(input()), int(input()), int(input())
A,B,C = input().split()
AA,BB,CC = int(A),int(B),int(C)
print((AA+BB)%CC)
print(((AA%CC)+(BB%CC))%CC)
print((AA*BB)%CC)
print(((AA%CC)*(BB%CC))%CC)