# [1330번] 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램 > < ==
A,B = input().split()
if A == B:
    print('==')
elif A < B:
    print('<')
elif A > B:
    print('>')
