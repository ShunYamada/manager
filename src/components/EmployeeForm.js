
import React from 'react';
import { View, Text, Picker, TouchableOpacity, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';

class EmployeeForm extends React.Component {
  state = {
    ImageSource: null,
  };

  selectPhotoTapped() {
    const options = {
      title: 'Select a Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          ImageSource: source
        });
      }
    });
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Image</Text>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={styles.ImageContainer}>
            { this.state.ImageSource === null ? <Text>Hello</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }
            </View>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Open Hour</Text>
          <DatePicker
          style={{ flex: 1 }}
          date={this.state.date}
          mode="time"
          placeholder="Select open hours"
          format="hh:mm a"
          minDate="01:00 AM"
          maxDate="12:00 AM"
          confirmBtnText="Confirm"
          showIcon={false}
          customStyles={{
            dateText: {
              fontSize: 18,
            },
            dateTouchBody: {
              borderWidth: 0
            }
          }}
          cancelBtnText="Cancel"
          onDateChange={(date) => {this.setState({date: date})}}
          />
        </CardSection>
      </View>
    );
  }
};


const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  ImageContainer: {
    flex: 1,
    marginLeft: 30,
    borderRadius: 5,
    height: 100,
    paddingTop: 50,
    paddingBottom: 50,
    paddingRight: 75,
    paddingLeft: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
  },
  datepickerStyle: {
    borderColor: '#fff',
    flex: 1
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
