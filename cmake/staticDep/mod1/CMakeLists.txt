add_subdirectory(mod2 mod2_lib)
link_directories(mod2_lib)
add_library(mod1 SHARED mod1.c mod1_func.c)
target_link_libraries(mod1 mod2)
