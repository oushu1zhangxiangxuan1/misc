
def last_jump(l):
    if not l:
        return False
    last_i = 0
    for i, v in enumerate(l):
        if v == 0:
            for sub_i, sub_v in enumerate(l[last_i, i]):
                if sub_i + sub_v < i:
                    return False
            last_i = i+1

    return False


if '__main__' == '__name__':
    l1 = [2, 3, 1, 1, 4]
    l2 = [3, 2, 1, 0, 4]
    print(last_jump(l1))
    print(last_jump(l1))
