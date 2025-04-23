import 'package:flutter/material.dart';
import 'package:flutter_callkit_incoming/entities/entities.dart';
import 'package:flutter_callkit_incoming/flutter_callkit_incoming.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Call Notification Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _currentUuid = '';

  @override
  void initState() {
    super.initState();
    // Initialize Callkit
    FlutterCallkitIncoming.onEvent.listen((event) {
      switch (event!.event) {
        case 'actionCallIncoming':
          // TODO: received an incoming call
          break;
        case 'actionCallStart':
          // TODO: started an outgoing call
          // TODO: show screen calling in Flutter
          break;
        case 'actionCallAccept':
          // TODO: accepted an incoming call
          // TODO: show screen calling in Flutter
          break;
        case 'actionCallDecline':
          // TODO: declined an incoming call
          break;
        case 'actionCallEnded':
          // TODO: ended an incoming/outgoing call
          break;
        case 'actionCallTimeout':
          // TODO: missed an incoming call
          break;
        case 'actionCallCallback':
          // TODO: only Android - click action `Call back` from missed call notification
          break;
        case 'actionCallToggleHold':
          // TODO: only iOS
          break;
        case 'actionCallToggleMute':
          // TODO: only iOS
          break;
        case 'actionCallToggleDmtf':
          // TODO: only iOS
          break;
        case 'actionCallToggleGroup':
          // TODO: only iOS
          break;
        case 'actionCallToggleAudioSession':
          // TODO: only iOS
          break;
        case 'actionDidUpdateDevicePushTokenVoip':
          // TODO: only iOS
          break;
        case 'actionCallCustom':
          // TODO: for custom action
          break;
         default:
      // Handle unexpected event
         print('Unhandled event: ${event.event}');
      }
    });
  }


  // Function to show an incoming call
  Future<void> _showIncomingCall() async {
    _currentUuid = UniqueKey().toString();
    CallKitParams callKitParams = CallKitParams(
      id: _currentUuid,
      nameCaller: 'John Doe',
      appName: 'Call Notification Demo',
      avatar: 'https://i.pravatar.cc/100',
      handle: '0123456789',
      type: 0,
      textAccept: 'Accept',
      textDecline: 'Decline',
      missedCallNotification: NotificationParams(
        showNotification: true,
        isShowCallback: true,
        subtitle: 'Missed call',
        callbackText: 'Call back',
      ),
      duration: 30000,
      extra: <String, dynamic>{'userId': '1a2b3c4d'},
      headers: <String, dynamic>{'apiKey': 'Abc@123!', 'platform': 'flutter'},
      android: const AndroidParams(
        isCustomNotification: true,
        isShowLogo: false,
        ringtonePath: 'system_ringtone_default',
        backgroundColor: '#0955fa',
        backgroundUrl: 'https://i.pravatar.cc/500',
        actionColor: '#4CAF50',
        textColor: '#ffffff',
        incomingCallNotificationChannelName: "Incoming Call",
        missedCallNotificationChannelName: "Missed Call",
        isShowCallID: false,
      ),
      ios: IOSParams(
        iconName: 'CallKitLogo',
        handleType: 'generic',
        supportsVideo: true,
        maximumCallGroups: 2,
        maximumCallsPerCallGroup: 1,
        audioSessionMode: 'default',
        audioSessionActive: true,
        audioSessionPreferredSampleRate: 44100.0,
        audioSessionPreferredIOBufferDuration: 0.005,
        supportsDTMF: true,
        supportsHolding: true,
        supportsGrouping: false,
        supportsUngrouping: false,
        ringtonePath: 'system_ringtone_default',
      ),
    );
    await FlutterCallkitIncoming.showCallkitIncoming(callKitParams);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Call Notification Demo'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: _showIncomingCall,
          child: Text('Show Incoming Call'),
        ),
      ),
    );
  }
}
