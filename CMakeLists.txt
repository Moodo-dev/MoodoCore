cmake_minimum_required(VERSION 3.14)
project(Moodo LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Qt6 COMPONENTS Widgets REQUIRED)

add_executable(moodo src/main.cpp)

target_link_libraries(moodo PRIVATE Qt6::Widgets)
