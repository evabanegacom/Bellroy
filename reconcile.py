# def reconcilable_helper(a, b):
#   main_list = list(set(a) - set(b))
#   return main_list

# print(reconcilable_helper([1,2,3], [3,5,6]))

def reconcilable_helper(a, b):
    for x in a:
        if x not in b:
            return('elements in a but not in b', x)

print(reconcilable_helper([1,2,3], [3,5,6]))
# main_list = [x for x in list_2 if x not in set_1]

