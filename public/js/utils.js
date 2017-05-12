function confirmBox(message, confirmCallback, cancelCallback) {
  bootbox.confirm({
    message: '<h3>' + message + '</h3>',
    buttons: {
      confirm: {
        label: 'Sim',
        className: 'btn-success'
      },
      cancel: {
        label: 'Não',
        className: 'btn-danger'
      }
    },
    callback: function (result) {
      if (result) {
        if (confirmCallback)
          confirmCallback(result);
      } else {
        if (cancelCallback)
          cancelCallback(result);
      }
    }
  });
}