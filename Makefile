AVD=NexusS-AVD
SDK=~/android-sdk-linux
DEVICE=UBJC35BMOIX0EM4

all: build-android-emulator
clean:
	titanium clean

compile-android:
	alloy compile --config platform=android

emulator-android-start:
	if [ "$(shell pgrep -c -f @${AVD})" = "0" ]; then \
		${SDK}/tools/emulator @${AVD} -qemu -m 512 & \
	fi

emulator-android-stop:
	pkill -f "@${AVD}"

build-android-emulator: emulator-android-start compile-android
	titanium build --platform android --target emulator --device-id ${AVD} &

restart-adb:
	sudo ${SDK}/platform-tools/adb kill-server
	sudo ${SDK}/android-sdk-linux/platform-tools/adb start-server

build-android-device: restart-adb compile-android
	titanium build --platform android --target device --device-id ${DEVICE}

install-run-android-emulator:
	echo $(shell ${SDK}/platform-tools/adb devices | grep emulator | cut -d" " -f 1)
	${SDK}/platform-tools/adb -s $(shell ${SDK}/platform-tools/adb devices | grep emulator | sed s/device//) install -r ${PWD}/build/android/bin/HelloWorld.apk
	adb shell am start

install-run-android-device:
	${SDK}/platform-tools/adb -d install -r ${PWD}/build/android/bin/HelloWorld.apk