 function getchart1(){
			  
				new Chart($("#chart-doughnut"), {
				    type: 'doughnut',
				    data: {
				        labels: ["IP", "浏览次数", "访客次数"],
				        datasets: [{
				            data: [49160,111254, 3243],
				            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
				        }]
				    },
				    options: {
				        responsive: false
				    }
				}); 
				  
			  new Chart($("#chart-vbar-1"), {
			      type: 'bar',
			      data: {
			          labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
			          datasets: [{
			              label: "幼儿评价系统流量统计",
			              backgroundColor: "rgba(1,2,85,0.5)",
			              borderColor: "rgba(0,0,0,0)",
			              hoverBackgroundColor: "rgba(51,202,185,0.7)",
			              hoverBorderColor: "rgba(0,0,0,0)",
			              data: [101, 591, 180, 358, 120, 555, 740]
			          }]
			      },
			      options: {
			          scales: {
			              yAxes: [{
			                  ticks: {
			                      beginAtZero: true
			                  }
			              }]
			          }
			      }
			  });
			  
			  new Chart($("#chart-pie"), {
			      type: 'pie',
			      data: {
			         labels: ["APP", "PC", "其他","微信"],
			          datasets: [{
						    label: "渠道流量占比",
			              data: [300, 50, 100,210],
			              backgroundColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)','rgba(75, 26, 86, 1)']
			          }]
			      },
			      options: {
			          responsive: false
			      }
			  });
		  }

function getchart2(){
			 
			new Chart($("#chart-doughnut"), {
			    type: 'doughnut',
			    data: {
			        labels: ["IP", "浏览次数", "访客次数"],
			        datasets: [{
			            data: [49160,111254, 3243],
			            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
			        }]
			    },
			    options: {
			        responsive: false
			    }
			});  	
			  new Chart($("#chart-vbar-1"), {
			      type: 'bar',
			      data: {
			          labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
			          datasets: [{
			              label: "幼儿评价系统流向统计",
			              backgroundColor: "rgba(151,22,185,0.5)",
			              borderColor: "rgba(0,0,0,0)",
			              hoverBackgroundColor: "rgba(51,202,185,0.7)",
			              hoverBorderColor: "rgba(0,0,0,0)",
			              data: [540, 730, 270, 38, 229, 175, 480]
			          }]
			      },
			      options: {
			          scales: {
			              yAxes: [{
			                  ticks: {
			                      beginAtZero: true
			                  }
			              }]
			          }
			      }
			  });
			  
			  new Chart($("#chart-pie"), {
			      type: 'pie',
			      data: {
			          labels: ["APP", "PC", "其他","微信"],
			          datasets: [{
						  label: "渠道流量占比",
			              data: [300, 50, 100,150],
			              backgroundColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)','rgba(65, 26, 86, 51)']
			          }]
			      },
			      options: {
			          responsive: false
			      }
			  });
	}
	
	function getchart3(){
		new Chart($("#chart-doughnut"), {
		    type: 'doughnut',
		    data: {
		        labels: ["IP", "浏览次数", "访客次数"],
		        datasets: [{
		            data: [49160,111254, 3243],
		            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
		
		new Chart($("#chart-vbar-1"), {
		    type: 'bar',
		    data: {
		        labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		        datasets: [{
		            label: "幼儿评价系统流向统计",
		            backgroundColor: "rgba(11,51,185,0.5)",
		            borderColor: "rgba(0,0,0,0)",
		            hoverBackgroundColor: "rgba(51,202,185,0.7)",
		            hoverBorderColor: "rgba(0,0,0,0)",
		            data: [154, 430, 670, 38, 229, 175, 180]
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
		
		new Chart($("#chart-pie"), {
		    type: 'pie',
		    data: {
		        labels: ["APP", "PC", "其他","微信"],
		        datasets: [{
								  label: "渠道流量占比",
		            data: [40, 250, 100,150],
		            backgroundColor: ['rgba(55,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(25, 206, 86, 1)','rgba(65, 26, 86, 51)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
	}
	
	function getchart4(){
		
		new Chart($("#chart-doughnut"), {
		    type: 'doughnut',
		    data: {
		        labels: ["IP", "浏览次数", "访客次数"],
		        datasets: [{
		            data: [49160,111254, 3243],
		            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
		
		new Chart($("#chart-vbar-1"), {
		    type: 'bar',
		    data: {
		        labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		        datasets: [{
		            label: "幼儿评价系统流向统计",
		            backgroundColor: "rgba(11,151,185,0.5)",
		            borderColor: "rgba(0,0,0,0)",
		            hoverBackgroundColor: "rgba(151,202,185,0.7)",
		            hoverBorderColor: "rgba(0,0,0,0)",
		            data: [54, 330, 270, 138, 29, 75, 380]
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
		
		new Chart($("#chart-pie"), {
		    type: 'pie',
		    data: {
		        labels: ["APP", "PC", "其他","微信"],
		        datasets: [{
								  label: "渠道流量占比",
		            data: [240, 50, 300,250],
		            backgroundColor: ['rgba(155,99,132,1)', 'rgba(254, 162, 235, 1)', 'rgba(325, 206, 86, 1)','rgba(165, 26, 86, 51)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
	}
	
	function getchart5(){
		
		new Chart($("#chart-doughnut"), {
		    type: 'doughnut',
		    data: {
		        labels: ["IP", "浏览次数", "访客次数"],
		        datasets: [{
		            data: [49160,111254, 3243],
		            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
		
		new Chart($("#chart-vbar-1"), {
		    type: 'bar',
		    data: {
		        labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		        datasets: [{
		            label: "幼儿评价系统流向统计",
		            backgroundColor: "rgba(121,151,185,0.5)",
		            borderColor: "rgba(0,0,0,0)",
		            hoverBackgroundColor: "rgba(151,202,85,0.7)",
		            hoverBorderColor: "rgba(0,0,0,0)",
		            data: [254, 30, 70, 338, 129, 275, 180]
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
		
		new Chart($("#chart-pie"), {
		    type: 'pie',
		    data: {
		        labels: ["APP", "PC", "其他","微信"],
		        datasets: [{
								  label: "渠道流量占比",
		            data: [140, 250, 30,150],
		            backgroundColor: ['rgba(15,99,232,1)', 'rgba(54, 462, 235, 111)', 'rgba(325, 26, 86, 1)','rgba(15, 26, 86, 51)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
	}
	
	function getchart6(){
		
		new Chart($("#chart-doughnut"), {
		    type: 'doughnut',
		    data: {
		        labels: ["IP", "浏览次数", "访客次数"],
		        datasets: [{
		            data: [49160,111254, 3243],
		            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
		
		new Chart($("#chart-vbar-1"), {
		    type: 'bar',
		    data: {
		        labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		        datasets: [{
		            label: "幼儿评价系统流向统计",
		            backgroundColor: "rgba(21,351,285,0.5)",
		            borderColor: "rgba(0,0,0,0)",
		            hoverBackgroundColor: "rgba(151,202,85,0.7)",
		            hoverBorderColor: "rgba(0,0,0,0)",
		            data: [54, 130, 120, 318, 199, 215, 80]
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
		
		new Chart($("#chart-pie"), {
		    type: 'pie',
		    data: {
		        labels: ["APP", "PC", "其他","微信"],
		        datasets: [{
								  label: "渠道流量占比",
		            data: [240, 150, 130,50],
		            backgroundColor: ['rgba(15,129,232,1)', 'rgba(254, 162, 235, 1)', 'rgba(235, 26, 86, 1)','rgba(115, 26, 86, 51)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
	}
	
	function getchart7(){
		
		new Chart($("#chart-doughnut"), {
		    type: 'doughnut',
		    data: {
		        labels: ["IP", "浏览次数", "访客次数"],
		        datasets: [{
		            data: [49160,111254, 3243],
		            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
		
		new Chart($("#chart-vbar-1"), {
		    type: 'bar',
		    data: {
		        labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		        datasets: [{
		            label: "幼儿评价系统流向统计",
		            backgroundColor: "rgba(213,25,25,0.5)",
		            borderColor: "rgba(0,0,0,0)",
		            hoverBackgroundColor: "rgba(51,20,185,0.7)",
		            hoverBorderColor: "rgba(0,0,0,0)",
		            data: [154, 230, 320, 118, 99, 115, 280]
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }]
		        }
		    }
		});
		
		new Chart($("#chart-pie"), {
		    type: 'pie',
		    data: {
		        labels: ["APP", "PC", "其他","微信"],
		        datasets: [{
								  label: "渠道流量占比",
		            data: [40, 350, 230,150],
		            backgroundColor: ['rgba(15,129,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(235, 126, 86, 1)','rgba(185,216, 86, 151)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
	}
	
	
	function getchart8(){
		new Chart($("#chart-doughnut"), {
		    type: 'doughnut',
		    data: {
		        labels: ["IP", "浏览次数", "访客次数"],
		        datasets: [{
		            data: [3000, 5550, 11200],
		            backgroundColor: ['rgba(155,199,132,1)', 'rgba(154, 162, 235, 1)', 'rgba(55, 206, 86, 1)']
		        }]
		    },
		    options: {
		        responsive: false
		    }
		});
	}
	
	
	function window1(){
		alert("努力查找中......");
		
		alert("连接数据库失败！");
	}
	
	